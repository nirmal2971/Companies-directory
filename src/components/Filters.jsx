import React from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Filters({ search, setSearch, industry, setIndustry, location, setLocation, industries, locations, sort, setSort }) {
  return (
    <Box display="flex" flexWrap="wrap" gap={2} mb={3}>
      <TextField
        label="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ minWidth: 200 }}
      />

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Industry</InputLabel>
        <Select value={industry} onChange={(e) => setIndustry(e.target.value)} label="Industry">
          <MenuItem value="">All</MenuItem>
          {industries.map((ind) => (
            <MenuItem key={ind} value={ind}>{ind}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Location</InputLabel>
        <Select value={location} onChange={(e) => setLocation(e.target.value)} label="Location">
          <MenuItem value="">All</MenuItem>
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sort} onChange={(e) => setSort(e.target.value)} label="Sort By">
          <MenuItem value="name_asc">Name ↑</MenuItem>
          <MenuItem value="name_desc">Name ↓</MenuItem>
          <MenuItem value="emp_asc">Employees ↑</MenuItem>
          <MenuItem value="emp_desc">Employees ↓</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
