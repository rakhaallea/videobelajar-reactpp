import { dataCourses } from "../../../utils/data"

// React Component
import Card from "../../combined/card/Card"

const Courses = () => {

    return (
        <>
            <section className="cards">
                <header className="cards-header">
                    <h1 className="title">
                        Koleksi Video Pembelajaran Unggulan
                    </h1>
                    <p className="text">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                </header>
                <div className="card-navigation overflow-x-scroll md:overflow-hidden" >
                    <ul className="nav-items">
                        <li className="nav-item active">Semua Kelas</li>
                        <li className="nav-item">Pemasaran</li>
                        <li className="nav-item">Desain</li>
                        <li className="nav-item">Pengembangan Diri</li>
                    </ul>
                </div>
                <div className="cards-content">
                    {dataCourses.map((course, index) => (
                        <Card
                            key={index}
                            img={course.img}
                            title={course.title}
                            desc={course.desc}
                            office={course.instructor.office}
                            instructor={course.instructor}
                            ratings={course.ratings}
                            price={course.price} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Courses