import licenses from "../../src/oss.json";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  Card
} from "@mui/material";

type OssLicenseDto = Record<
  string,
  {
    licenses: string;
    repository?: string;
    publisher?: string;
    url?: string;
    path?: string;
    licenseFile?: string;
  }
>;

export default function OssLicensesTable() {
  const entries = Object.entries(licenses as OssLicenseDto).sort(([a], [b]) => a.localeCompare(b));
  return (
    <Card
      sx={{
        maxHeight: 600,
        overflow: "auto",
      }}
    >
      <TableContainer>
        <Table sx={{ backgroundColor: "background.defaultDark", minWidth: 650 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                Package
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                License
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                Publisher
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                Repository
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                }}
              >
                Website
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {entries.map(([packageName, item]) => (
              <TableRow
                key={packageName}
                sx={{
                  "&:hover": {
                    backgroundColor: "button.default",
                  },
                }}
              >
                <TableCell
                  sx={{
                    color: "text.secondary",
                    fontFamily: "monospace",
                  }}
                >
                  {packageName}
                </TableCell>

                <TableCell
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {item.licenses}
                </TableCell>

                <TableCell
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  {item.publisher || "-"}
                </TableCell>

                <TableCell>
                  {item.repository ? (
                    <Link
                      href={item.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "border.secondary",
                        textDecoration: "underline",
                        cursor: "pointer",
                        "&:hover": {
                          color: "text.primary",
                        },
                      }}
                    >
                      Repository
                    </Link>
                  ) : (
                    "-"
                  )}
                </TableCell>

                <TableCell>
                  {item.url ? (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "border.secondary",
                        textDecoration: "underline",
                        cursor: "pointer",
                        "&:hover": {
                          color: "text.primary",
                        },
                      }}
                    >
                      Website
                    </Link>
                  ) : (
                    "-"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}