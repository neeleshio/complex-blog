import React from 'react';
import { StyledTiles } from './styles';

type TilesProps = {
    company: string;
    designation: string;
    timeline: string;
    projects: string[];
};

const Tiles = ({ company, designation, timeline, projects }: TilesProps) => {
    return (
        <StyledTiles>
            <span className="company">{company}</span>
            <span className="position">{designation}</span>
            <span className="timeline">{timeline}</span>
            <div className="projects">
                <span>{projects.join(', ')}</span>
            </div>
        </StyledTiles>
    );
};

export default Tiles;
