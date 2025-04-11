import '../styles/cv.css';
export default function Cover({inputs}) {
    return(
        <div className="cover">
            <div className="info">
                <div>{inputs.name}</div>
                <div>{inputs.email}</div>
                <div>{inputs.number}</div>
            </div>
            <div className="education">
                <div>{inputs.eduname}</div>
                <div>{inputs.major}</div>
                <div>{inputs.gradDate}</div>
            </div>
            <div className="work">
                <div>{inputs.compName}</div>
                <div>{inputs.title}</div>
                <div>{inputs.workDate}</div>
            </div>
        </div>

    );
}