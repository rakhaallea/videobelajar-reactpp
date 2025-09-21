import { create } from "zustand";
import { getCourses } from "../services/api/coursesService";
const useCoursesStore = create((set) => ({
    courses: [],
    loading: false,
    error: null,

    // Fetch semua courses
    fetchCourses: async () => {
        set({ loading: true, error: null });
        try {
            const data = await getCourses();
            set({ courses: data, loading: false });
        } catch (err) {
            set({ error: err.message || "Failed to fetch courses", loading: false });
        }
    },
}));

export default useCoursesStore;
