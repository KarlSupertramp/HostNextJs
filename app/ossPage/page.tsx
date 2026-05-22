'use client';

import { Box, Container, Typography } from "@mui/material";
import OssLicensesTable from "../components/ossLicenseTable";
import { BackButton } from "../sections/backbutton";

export default function OssPage() {
    return <Container maxWidth="lg">
        <BackButton title="Open Source Licenses"/>
        <OssLicensesTable />
    </Container>
}