interface ResumeData {
  id: string;
  userId: string;
  name: string;
  data: any;
  createdAt: string;
  updatedAt: string;
}

class LocalStorage {
  private getResumes(): ResumeData[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem('nova_resumes');
    return stored ? JSON.parse(stored) : [];
  }

  private saveResumes(resumes: ResumeData[]) {
    localStorage.setItem('nova_resumes', JSON.stringify(resumes));
  }

  saveResume(userId: string, name: string, data: any): string {
    const resumes = this.getResumes();
    const existingIndex = resumes.findIndex((r) => r.userId === userId && r.name === name);

    if (existingIndex >= 0) {
      resumes[existingIndex] = {
        ...resumes[existingIndex],
        data,
        updatedAt: new Date().toISOString(),
      };
    } else {
      const newResume: ResumeData = {
        id: Date.now().toString(),
        userId,
        name,
        data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      resumes.push(newResume);
    }

    this.saveResumes(resumes);
    return existingIndex >= 0 ? resumes[existingIndex].id : resumes[resumes.length - 1].id;
  }

  getUserResumes(userId: string): ResumeData[] {
    return this.getResumes().filter((r) => r.userId === userId);
  }

  getResume(id: string): ResumeData | null {
    return this.getResumes().find((r) => r.id === id) || null;
  }

  deleteResume(id: string): boolean {
    const resumes = this.getResumes();
    const filtered = resumes.filter((r) => r.id !== id);
    this.saveResumes(filtered);
    return filtered.length < resumes.length;
  }
}

export const storage = new LocalStorage();
export type { ResumeData };
