
interface IProject {
    imageURL?: string,
    name?: string
    type?: string
}
const Project: React.FC<IProject> = ({ imageURL, name, type }) => {
    return (
        <div className="project">
            <div className="project-img">
                <img src={`../../src/assets/images/projects/` + imageURL} alt="" width="100%" />
            </div>
            <div className="project-info">
                <strong>Project name: {name}</strong>
                <p>Type: {type}</p>
            </div>
        </div>
    )
}
export default Project