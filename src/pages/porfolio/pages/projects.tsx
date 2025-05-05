import Project from "../components/project"


const Projects = () => {
    return (
        <div className="vstack">
            <h2>Projects</h2>
            <br/>
            <section>
                <h6>Web</h6>
                <div className="projects">
                    <Project imageURL="/images/projects/project-hana.png" name="Hana Spa" type="Web" />
                    <Project imageURL="project-reservation.png" name="Reservation" type="Web Application" />
                    <Project imageURL="project-seamless.png" name="Seamless" type="Web" />
                    <Project imageURL="project-bank-broker.png" name="Bank Broker" type="Web Application" />
                    <Project imageURL="project-cu-meo.png" name="Cu Meo" type="Web Site" />
                
                    <Project imageURL="project-house-guru.png" name="House Guru" type="Web Site" />
                    <Project imageURL="project-bao-minh.png" name="Bao Minh" type="Web Application" />
                    <Project imageURL="project-cameralla-photo.png" name="Cameralla" type="Web Site" />
                </div>
            </section>

            <section>
                <h6>Mobile</h6>
                <div className="projects">
                    <Project imageURL="project-yoga-club.png" name="Yoga Club" type="Mobile App" />
                    <Project imageURL="project-fast-food.png" name="Fast Food" type="Mobile App" />
                    <Project imageURL="project-larvik.png" name="Larvik" type="Mobile App" />
                    <Project imageURL="project-shop-app.png" name="Shop App" type="Mobile App" />                    
                </div>
            </section>
           
        </div>
        
    )
}   

export default Projects