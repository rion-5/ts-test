import * as fs from 'fs';
import * as path from 'path';

interface Faculty {
    department: string;
    rank: string;
    retirementTrack: string;
    foreigner: string;
}

// JSON 파일 경로
const filePath = path.join('./data/', 'faculty.json');

// 파일 읽기
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const facultyList: Faculty[] = JSON.parse(data);
        console.log('Faculty List:', facultyList);
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});
