// React Component
import { useEffect, useState } from "react";
import Card from "../../combined/card/Card";
import useCoursesStore from "../../../store/coursesStores";

const Courses = () => {
    const { courses, fetchCourses, loading, error } = useCoursesStore();
    const [selectedJenis, setSelectedJenis] = useState("Semua Kelas");

    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    // Filter courses sesuai jenis
    const filteredCourses =
        selectedJenis === "Semua Kelas"
            ? courses
            : courses.filter((course) => course.jenis === selectedJenis);

    const jenisList = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri"];

    return (
        <section className="cards" id="courses">
            <header className="cards-header">
                <h1 className="title">Koleksi Video Pembelajaran Unggulan</h1>
                <p className="text">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </header>

            <div className="card-navigation overflow-x-scroll md:overflow-hidden">
                <ul className="nav-items flex gap-4">
                    {jenisList.map((jenis) => (
                        <li
                            key={jenis}
                            className={`nav-item cursor-pointer ${selectedJenis === jenis ? "active" : ""
                                }`}
                            onClick={() => setSelectedJenis(jenis)}
                        >
                            {jenis}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="cards-content">
                {loading && <p>Loading courses...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && filteredCourses.length === 0 && (
                    <p>Tidak ada courses.</p>
                )}
                {!loading &&
                    filteredCourses.map((course, index) => (
                        <Card
                            key={index}
                            img={course.img}
                            title={course.title}
                            desc={course.desc}
                            office={course.instructor.office}
                            instructor={course.instructor}
                            ratings={course.ratings}
                            price={course.price}
                        />
                    ))}
            </div>
        </section>
    );
};

export default Courses;
