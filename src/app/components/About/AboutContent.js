"use client";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function AboutContent() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>Our Mission</Typography>
            <Typography variant="body2">
              To deliver industry-relevant IT and e-commerce education, preparing graduates with practical skills and global perspectives.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>Our Vision</Typography>
            <Typography variant="body2">
              To be a leading technology and commerce institution known for innovation, research, and employability.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={1} sx={{ p: 3, height: "100%" }}>
            <Typography variant="h6" gutterBottom>History & Achievements</Typography>
            <Typography variant="body2">
              Since inception, we have partnered with international universities and produced professionals who work in top companies locally and abroad.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="text.secondary">
          {/* optional longer paragraph */}
          Softwarica College focuses on practical training, internships, and global exposure through international collaborations and industry-led curricula.
        </Typography>
      </Box>
    </Container>
  );
}
