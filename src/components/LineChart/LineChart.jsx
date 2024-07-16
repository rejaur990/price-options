import { LineChart as LChart , Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    
        const mathMarksData = [
            { "name": "Alice", "mathMarks": 85, "physicsMarks": 90, "chemistryMarks": 88 },
            { "name": "Bob", "mathMarks": 78, "physicsMarks": 85, "chemistryMarks": 82 },
            { "name": "Charlie", "mathMarks": 92, "physicsMarks": 88, "chemistryMarks": 91 },
            { "name": "David", "mathMarks": 74, "physicsMarks": 80, "chemistryMarks": 76 },
            { "name": "Ella", "mathMarks": 88, "physicsMarks": 92, "chemistryMarks": 89 },
            { "name": "Frank", "mathMarks": 67, "physicsMarks": 70, "chemistryMarks": 72 },
            { "name": "Grace", "mathMarks": 95, "physicsMarks": 94, "chemistryMarks": 96 },
            { "name": "Henry", "mathMarks": 80, "physicsMarks": 83, "chemistryMarks": 85 },
            { "name": "Ivy", "mathMarks": 76, "physicsMarks": 78, "chemistryMarks": 80 },
            { "name": "Jack", "mathMarks": 89, "physicsMarks": 86, "chemistryMarks": 87 }
          
        ];
      
      

    return (
        <div>
          <LChart width={1250} height={400} data={mathMarksData}>
            <XAxis dataKey={name} stroke='purple'></XAxis>
            <YAxis stroke='purple'></YAxis>
            <Line dataKey={'mathMarks'} stroke='white'></Line>
            <Line dataKey={'physicsMarks'} stroke='yellow' ></Line>
            <Line dataKey={'chemistryMarks'} stroke='red'></Line>
          </LChart>
        </div>
    );
};

export default LineChart;