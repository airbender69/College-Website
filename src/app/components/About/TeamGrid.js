"use client";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// Simple TeamGrid placeholder — replace with real team data when available
export default function TeamGrid() {
  const team = [
    { name: "Dr. A. Lecturer", role: "Head of Department" },
    { name: "Ms. B. Instructor", role: "Senior Lecturer" },
    { name: "Mr. C. Mentor", role: "Industry Mentor" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Our Team</Typography>
      <Grid container spacing={3}>
        {team.map((member) => (
          <Grid item xs={12} sm={4} key={member.name}>
            <Paper elevation={1} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">{member.name}</Typography>
              <Typography variant="body2" color="text.secondary">{member.role}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
