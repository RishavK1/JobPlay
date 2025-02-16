import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);

  // Ensure allAppliedJobs is an array before accessing its length
  const appliedJobs = Array.isArray(allAppliedJobs) ? allAppliedJobs : [];

  return (
    <div>
      <h1 className="font-bold text-lg my-5">
        Applied Jobs ({appliedJobs.length})
      </h1>

      <Table>
        <TableCaption>A List of Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4" className="text-center">
                You have not applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            appliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 hover:bg-red-400"
                        : appliedJob?.status === "pending"
                        ? "bg-gray-400 hover:bg-gray-400"
                        : "bg-green-400 hover:bg-green-400"
                    }`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
