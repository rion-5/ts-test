import {promises as fs} from 'fs';
import * as path from 'path';

interface Faculty {
    department: string;
    rank: string;
    retirementTrack: string;
    foreigner: string;
}

let tenureTrackFaculty: Faculty[] = [];

async function readAndFilterFaculty() : Promise<Faculty[]>{
    try{
        const filePath = path.join('./data/', 'faculty.json');
        const data = await fs.readFile(filePath, 'utf8');
        const facultyList: Faculty[] = JSON.parse(data);
        tenureTrackFaculty = facultyList.filter(faculty => faculty.retirementTrack === "정년트랙");
        return tenureTrackFaculty;
    } catch (err) {
        console.error('Error:', err);
        return [];
    }
}

async function main(){
    const tenureTrackFaculty = await readAndFilterFaculty();
    console.log('TenureTrackFaculty List:', tenureTrackFaculty);
}

main()
