"use client";

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";

export default function AboutHero() {
  return (
    <Box sx={{ position: "relative", height: { xs: 360, md: 480 }, overflow: "hidden" }}>
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/Logo.svg"
          alt="Softwarica logo"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          sizes="(max-width: 900px) 100vw, 1200px"
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(2, 43, 73, 0.45)",
            backdropFilter: "blur(1px)",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "common.white",
            py: { xs: 6, md: 10 },
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
            About Softwarica College
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: 700, mb: 3 }}>
            In collaboration with Coventry University — quality education and global opportunities.
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} href="/apply" variant="contained" color="primary" size="large">
              Apply Now
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ borderColor: "rgba(255,255,255,0.7)" }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
