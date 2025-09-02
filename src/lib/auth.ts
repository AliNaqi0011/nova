interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
}

interface AuthResult {
  user: User | null;
  error: string | null;
}

class LocalAuth {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadUsers();
      this.loadCurrentUser();
    }
  }

  private loadUsers() {
    const stored = localStorage.getItem('nova_users');
    this.users = stored ? JSON.parse(stored) : [];
  }

  private saveUsers() {
    localStorage.setItem('nova_users', JSON.stringify(this.users));
  }

  private loadCurrentUser() {
    const stored = localStorage.getItem('nova_current_user');
    this.currentUser = stored ? JSON.parse(stored) : null;
  }

  private saveCurrentUser(user: User | null) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('nova_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nova_current_user');
    }
  }

  signUp(name: string, email: string, password: string): AuthResult {
    if (!name || !email || !password) {
      return { user: null, error: 'All fields are required' };
    }

    if (password.length < 6) {
      return { user: null, error: 'Password must be at least 6 characters' };
    }

    if (this.users.find((u) => u.email === email)) {
      return { user: null, error: 'Email already exists' };
    }

    const user: User = {
      id: Date.now().toString(),
      name,
      email,
      createdAt: new Date().toISOString(),
    };

    this.users.push(user);
    this.saveUsers();
    this.saveCurrentUser(user);
    localStorage.setItem(`nova_pwd_${user.id}`, password);

    return { user, error: null };
  }

  signIn(email: string, password: string): AuthResult {
    if (!email || !password) {
      return { user: null, error: 'Email and password required' };
    }

    const user = this.users.find((u) => u.email === email);
    if (!user) {
      return { user: null, error: 'Invalid email or password' };
    }

    const storedPassword = localStorage.getItem(`nova_pwd_${user.id}`);
    if (storedPassword !== password) {
      return { user: null, error: 'Invalid email or password' };
    }

    this.saveCurrentUser(user);
    return { user, error: null };
  }

  signOut() {
    this.saveCurrentUser(null);
    // Force trigger auth change
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('storage'));
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  onAuthChange(callback: (user: User | null) => void) {
    callback(this.currentUser);

    const interval = setInterval(() => {
      const stored = localStorage.getItem('nova_current_user');
      const user = stored ? JSON.parse(stored) : null;
      if (JSON.stringify(user) !== JSON.stringify(this.currentUser)) {
        this.currentUser = user;
        callback(user);
      }
    }, 100);

    return () => clearInterval(interval);
  }
}

export const auth = new LocalAuth();
export type { User, AuthResult };
