import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEOHead = ({ 
  title = 'Nova Resume Builder - Free Professional Resume Builder',
  description = 'Create professional ATS-friendly resumes with Nova Resume Builder. Free templates, real-time preview, and PDF export.',
  image = '/resume.png',
  url = 'https://nova-resume.com'
}: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Nova Resume Builder",
            "description": description,
            "url": url,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser"
          })
        }}
      />
    </Head>
  );
};