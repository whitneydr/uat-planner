const Progress = () => {

    return (
        <div id="progress" className="project-details-section">
                <h2>Progress</h2>

                <div id="progress-bar">
                    <div id="to-do" style={{width: "30%"}}>30%</div>
                    <div id="in-progress" style={{width: "20%"}}>20%</div>
                    <div id="passed" style={{width: "40%"}}>40%</div>
                    <div id="failed" style={{width: "10%"}}>10%</div>
                </div>
                <div className="progress-key">
                    
                        <ul>
                            <li className="grey">To do</li>
                            <li className="yellow">In progress</li>
                            <li className="green">Passed</li>
                            <li className="red">Failed</li>
                        </ul>
                    
                </div>
            </div>
    )
}

export default Progress;