'use client';

import { Box, Container, Typography, Link as MuiLink, Divider } from "@mui/material";

type BlogPostData = {
  date: string;
  title: string;
  paragraphs: string[];
  links?: { text: string; href: string }[];
};

export default function Blog() {
  // Component to render a single blog post
  const BlogPost = ({ date, title, paragraphs, links }: BlogPostData) => (

    <Box sx={{
      mb: 4, 
      bgcolor: "background.paper", 
      p: 3,
      borderBottomLeftRadius: 32,
      borderBottomRightRadius: 32,
      borderTopRightRadius: 32, 
      boxShadow: 1 }}>
      <Typography mb={0.5} variant="subtitle2" color="text.faded">
        {new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
      </Typography>
      <Typography mb={2} variant="h5">
        {title}
      </Typography>
      
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          component="p"
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 1.5,
            "& b, & strong": { fontWeight: 700, color: "text.primary" },
          }}
        >
          {paragraph}
        </Typography>
      ))}

      {links && links.length > 0 && (
        <Box mt={2}>
          <Divider sx={{ my: 3 }} />
          {links.map((link, index) => (
            <MuiLink
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "block", mb: 1 }}
            >
              {link.text}
            </MuiLink>
          ))}
        </Box>
      )}
    </Box>
  );

  // Array of blog posts (data)
  const blogPosts = (): BlogPostData[] => [
    {
      date: "2026-02-15",
      title: "My First Blog Post",
      paragraphs: [
        "Hello world! This is my first blog post.",
        "I am writing this blog using Next.js and MUI.",
      ],
      links: [
        { text: "Learn Next.js", href: "https://nextjs.org" },
        { text: "Learn MUI", href: "https://mui.com" },
      ],
    },
    {
      date: "2026-02-15",
      title: "Another Post",
      paragraphs: [
        "This is my second post.",
        "I can easily add more content here.",
      ],
    },
  ];

  return (
    <Box sx={{ py: 5, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography variant="h4" mb={4} align="center">
          My Blog
        </Typography>

        {blogPosts().map((post, index) => (
          <BlogPost
            date={post.date}
            key={index}
            title={post.title}
            paragraphs={post.paragraphs}
            links={post.links}
          />
        ))}
      </Container>
    </Box>
  );
}
