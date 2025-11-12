// src/components/StatsCounter.js
"use client";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const stats = [
  { value: "5,000+", label: "Students" },
  { value: "250+", label: "Graduates / Year" },
  { value: "30+", label: "Industry Courses" },
];

export default function StatsCounter() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {stats.map((s) => (
          <Grid item xs={12} sm={4} key={s.label}>
            <Paper elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>{s.value}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{s.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
