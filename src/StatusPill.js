import './App.css';

export function StatusPill({status}) {

    let statusText, pillBackgroundColor, circleFillColor, textColor

    switch (status) {
        case "Not Started":
            statusText = "Not Started"
            pillBackgroundColor = '#ECECEC'
            circleFillColor = '#7D7D7D'
            textColor = '#4A4A4A'
            break

        case "In Progress":
            statusText = "In Progress"
            pillBackgroundColor = '#FFF3CA'
            circleFillColor = '#F5BF00'
            textColor = '#705700'
            break

        case "Complete":
            statusText = "Complete"
            pillBackgroundColor = '#e4ffed'
            circleFillColor = '#00CE21'
            textColor = '#00671D'
            break
        
        default: 
            statusText = "Not Started"
            pillBackgroundColor = '#ECECEC'
            circleFillColor = '#7D7D7D'
            textColor = '#4A4A4A'
    }

        return (
            <div className="status-pill" style={{background: pillBackgroundColor}}>
                <div className="status-dot">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" fill={circleFillColor}/>
                    </svg>
                </div>
                <span className="status-text" style={{color: textColor}}>{statusText}</span>
            </div>
        )

}
