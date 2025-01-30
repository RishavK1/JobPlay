import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API } from "../utils/constant";
import { toast } from "sonner";

let selectingStatus = ["Accepted", "Rejected"];
const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);
  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(`${APPLICATION_API}/status/${id}/update`, {
        status,
      });
      console.log(res.data);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>Applicants for the job</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants &&
            applicants.application.map((item) => (
              <tr key={item._id}>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phonenumber}</TableCell>
                <TableCell>
                  {item?.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="blank"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </TableCell>
                <TableCell>
                  {item?.applicant?.createdAt.split("T")[0]}{" "}
                </TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal></MoreHorizontal>
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {selectingStatus.map((status, index) => (
                        <div
                          onClick={() => statusHandler(status, item?._id)}
                          key={index}
                          className="cursor-pointer bg-white items-center"
                        >
                          <span>{status}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
