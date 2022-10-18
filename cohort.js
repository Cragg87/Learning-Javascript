const cohort = {
  name: 'May 2022',
  id: (1234),
  students: ["James", "Sasha", "William"]
};

const message = () => {
  console.log(cohort.id  + ' - ' + cohort.name + ' - ' + cohort.students.length + ' students in this cohort');
}

message(cohort)