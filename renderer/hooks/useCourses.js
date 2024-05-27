"use client";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useContext, useState } from "react";

const useCourses = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  // const BASE_URL = process.env.REACT_APP_BASE_URL;
  //   const access_token = localStorage.getItem("auth-token");

  const [allCourses, setAllCourses] = useState([]);
  const [allLessons, setAllLessons] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [singleLessons, setSingleLessons] = useState([]);
  const [loading, setLoading] = useState([]);
  const user = useContext(AuthContext);
  const getAllCourses = async () => {
    setLoading(true);
    await axios
      .get(
        `${baseUrl}/api/course/courses
      `,
        {
          headers: { "x-auth-token": user?.token },
        }
      )
      .then((response) => {
        if (response.data) {
          console.log("sec", response);
          setLoading(false);
          setAllCourses(response.data);
        }

        // console.log(response.data.data.allRooms)
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            console.log("An error with status 403 occured", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };
  const getAllLessons = async () => {
    setLoading(true);
    await axios
      .get(
        `${baseUrl}/api/lesson/lessons
      `,
        {
          headers: { "x-auth-token": user?.token },
        }
      )
      .then((response) => {
        if (response.data) {
          console.log("sec", response);
          setLoading(false);
          setAllLessons(response.data);
        }

        // console.log(response.data.data.allRooms)
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            console.log("An error with status 403 occured", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };
  const getSingleLessons = async (id) => {
    setLoading(true);
    await axios
      .get(
        `${baseUrl}/api/lesson/${id}
      `,
        {
          headers: { "x-auth-token": user?.token },
        }
      )
      .then((response) => {
        if (response.data) {
          console.log("sec", response);
          setLoading(false);
          setAllLessons(response.data);
        }

        // console.log(response.data.data.allRooms)
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            console.log("An error with status 403 occured", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };
  const getAllSubjects = async () => {
    setLoading(true);
    await axios
      .get(
        `${baseUrl}/api/subject/subjects
      `,
        {
          headers: { "x-auth-token": user?.token },
        }
      )
      .then((response) => {
        if (response.data) {
          console.log("sec", response);
          setLoading(false);
          setAllSubjects(response.data);
        }

        // console.log(response.data.data.allRooms)
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          const { status, data } = error.response;
          if (status === 400 && data && data.message) {
            console.log("An error occured", data.message);
          } else if (status === 403 && data && data.message) {
            console.log("An error with status 403 occured", data.message);
          } else {
            console.log("Axios error:", error);
          }
        } else {
          console.log("Network error:", error.message);
        }
      });
  };
  return {
    allCourses,
    getAllLessons,
    allLessons,
    getAllCourses,
    loading,
    getSingleLessons,
    singleLessons,
    getAllSubjects,
    allSubjects
  };
};

export default useCourses;
