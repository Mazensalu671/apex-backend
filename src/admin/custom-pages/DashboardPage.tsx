import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Flex } from "@strapi/design-system";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaEnvelopeOpenText,
} from "react-icons/fa";

const DashboardPage = () => {
  const [stats, setStats] = useState({
    projects: 12,
    employees: 8,
    partners: 4,
    messages: 20,
  });

  const [chartData] = useState([
    { month: "Jan", projects: 2 },
    { month: "Feb", projects: 3 },
    { month: "Mar", projects: 4 },
    { month: "Apr", projects: 6 },
    { month: "May", projects: 8 },
    { month: "Jun", projects: 10 },
  ]);

  useEffect(() => {
    // ⚙️ لاحقاً سنربطها بـ Strapi API
  }, []);

  return (
    <Box padding={8}>
      {/* Header */}
      <Typography variant="alpha" textColor="primary600" fontWeight="bold">
        Apex ISC Dashboard
      </Typography>
      <Typography textColor="neutral600">
        Overview of your operations and performance
      </Typography>

      {/* Stats Section */}
      <Flex wrap="wrap" gap={6} marginTop={6}>
        <StatCard
          label="Projects"
          value={stats.projects}
          icon={<FaChartLine size={28} />}
          color="#1a609e"
        />
        <StatCard
          label="Employees"
          value={stats.employees}
          icon={<FaUserTie size={28} />}
          color="#2563eb"
        />
        <StatCard
          label="Partners"
          value={stats.partners}
          icon={<FaHandshake size={28} />}
          color="#0284c7"
        />
        <StatCard
          label="Messages"
          value={stats.messages}
          icon={<FaEnvelopeOpenText size={28} />}
          color="#1e40af"
        />
      </Flex>

      {/* Line Chart */}
      <Box
        background="neutral0"
        shadow="tableShadow"
        padding={6}
        marginTop={8}
        hasRadius
      >
        <Typography variant="beta" textColor="primary600" fontWeight="bold">
          Project Growth Over Time
        </Typography>

        <Box style={{ width: "100%", height: 300, marginTop: "1rem" }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#1a609e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Quick Actions */}
      <Box
        background="neutral0"
        shadow="tableShadow"
        padding={6}
        marginTop={8}
        hasRadius
      >
        <Typography variant="beta" textColor="primary600" fontWeight="bold">
          Quick Actions
        </Typography>

        <Flex gap={4} wrap="wrap" paddingTop={4}>
          <Button>➕ Add New Project</Button>
          <Button variant="secondary">Add Partner</Button>
          <Button variant="tertiary">Add Employee</Button>
          <Button variant="tertiary">View All Messages</Button>
        </Flex>
      </Box>
    </Box>
  );
};

// ✅ مكون الكارد (بدون أي خطأ TypeScript)
const StatCard = ({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) => (
  <Box
    hasRadius
    shadow="filterShadow"
    padding={6}
    style={{
      backgroundColor: color,
      color: "white",
      flex: "1 1 240px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Box>
      <Typography variant="epsilon" textColor="neutral0">
        {label}
      </Typography>
      <Typography variant="alpha" fontWeight="bold">
        {value}
      </Typography>
    </Box>
    <Box>{icon}</Box>
  </Box>
);

export default DashboardPage;
