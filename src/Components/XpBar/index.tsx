import { useEffect, useState } from 'react';
import './style.css'

interface ExperienceBarProps {
    level: number,
    startxp: number,
    endxp: number,
    xp: number,
}

export function ExperienceBar({xp, endxp, level, startxp}: ExperienceBarProps) {
    const [percert, setPercent] = useState(0)

    useEffect(() => { setPercent((xp / endxp) * 100) }, [endxp, xp])

    return (
        < header className="experiencebar" >
            <span className="current-level">Level {level}</span>
            <span>{startxp} xp</span>
            <div>
                <div style={{ width: `${percert}%` }} />
                <span className="current-experience" style={{ left: `${percert}%` }}> {xp} xp</span>
            </div>
            <span>{endxp} xp</span>
        </header >
    );
}