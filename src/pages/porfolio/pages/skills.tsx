import Rating from "../components/rating"


const Skills = () => {
    return (
        <div className="vstack">
            <h2>Skills</h2>
            <p>
                With a passion for crafting seamless user journeys, I specialize in creating designs that are not only visually appealing but also user-centric. My expertise spans:
            </p>
            <br />
            <h6>Design Tools</h6>
            <section>
                <div className="skills">
                    <strong>Figma</strong>
                    <Rating rate={9} />
                    <strong>Photoshop</strong>
                    <Rating rate={7} />
                    <strong>Adobe Illustrator</strong>
                    <Rating rate={7} />

                </div>
            </section>

            <br />
            <h6>HTML/CSS/Javascript</h6>
            <section>
                <div className="skills">
                    <strong>Html/Html5</strong>
                    <Rating rate={9} />
                    <strong>CSS/CSS3</strong>
                    <Rating rate={9} />
                    <strong>Bootstrap</strong>
                    <Rating rate={9} />
                    <strong>Javascript</strong>
                    <Rating rate={6} />
                    <strong>jQuery Library</strong>
                    <Rating rate={6} />
                    <strong>Meterial UI</strong>
                    <Rating rate={7} />
                </div>
            </section>

            <h6>Javascript Library</h6>
            <section>
                <div className="skills">
                    <strong>Reactjs</strong>
                    <Rating rate={5} />
                    <strong>Angular 2+</strong>
                    <Rating rate={5} />
                </div>
            </section>

        </div>

    )
}

export default Skills