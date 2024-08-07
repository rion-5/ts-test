import {promises as fs} from 'fs';
import * as path from 'path';

interface Faculty {
    department: string;
    rank: string;
    retirementTrack: string;
    foreigner: string;
}

interface DepartmentCount {
    department: string;
    count: number;
}

let tenureTrackFaculty: Faculty[] = [];
let departmentCount : DepartmentCount[] = [];

async function readAndFilterReduceFaculty() : Promise<DepartmentCount[]>{
    try{
        const filePath = path.join('./data/', 'faculty.json');
        const data = await fs.readFile(filePath, 'utf8');
        const facultyList: Faculty[] = JSON.parse(data);
        departmentCount = facultyList.filter(faculty => faculty.retirementTrack === "정년트랙") // 필터링
        .reduce((acc, faculty) => {
            const existingDepartment = acc.find(item => item.department === faculty.department);
            if (existingDepartment) {
                existingDepartment.count++;
            } else {
                acc.push({ department: faculty.department, count: 1 });
            }
            return acc;
        }, [] as DepartmentCount[]);
        
        return departmentCount;
        
    } catch (err) {
        console.error('Error:', err);
        return [];
    }
}

async function main(){
    const result = await readAndFilterReduceFaculty();
    console.log('DepartmentCount List:', result);
}

main()
