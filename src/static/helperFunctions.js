const average = (arr) =>
  Math.round(arr.reduce((sume, el) => sume + el, 0) / arr.length);

export const createCategoryChartData = (data) => {
  const chartData = {};

  data.forEach((item) => {
    const expenditure = item.expenditure;
    const student = item.students;

    if (chartData.hasOwnProperty(item.county)) {
      chartData[item.county].raw_expenditure.push(expenditure);
      chartData[item.county].raw_students.push(student);
    } else {
      chartData[item.county] = {
        raw_expenditure: [expenditure],
        raw_students: [student],
      };
    }
  });

  const dataAverages = Object.keys(chartData).map((key) => {
    const newObject = {
      county: key,
      average_expenditure: average(chartData[key].raw_expenditure),
      average_student: average(chartData[key].raw_students),
    };
    newObject.average_spent_per_student =
      newObject.average_expenditure / newObject.average_student;

    return newObject;
  });

  return dataAverages.sort((a, b) => {
    return a.average_spent_per_student - b.average_spent_per_student;
  });
};

export const createNumericalChartData = (data) => {
  const chartData = {};

  data.forEach((item) => {
    const student = item.students;
    const teacher = item.teachers;

    if (chartData.hasOwnProperty(item.county)) {
      chartData[item.county].raw_student.push(student);
      chartData[item.county].raw_teachers.push(teacher);
    } else {
      chartData[item.county] = {
        raw_student: [student],
        raw_teachers: [teacher],
      };
    }
  });

  const dataAverages = Object.keys(chartData).map((key) => {
    const newObject = {
      county: key,
      average_student: average(chartData[key].raw_student),
      average_teacher: average(chartData[key].raw_teachers),
    };
    newObject.students_per_teacher =
      newObject.average_student / newObject.average_teacher;
    return newObject;
  });

  return dataAverages.sort((a, b) => {
    return a.average_teacher - b.average_teacher;
  });
};

export const createScatterChartData = (data) => {
  const chartData = {};

  data.forEach((item) => {
    const student = item.students;
    const teacher = item.teachers;
    const expenditure = item.expenditure;

    if (chartData.hasOwnProperty(item.county)) {
      chartData[item.county].raw_student.push(student);
      chartData[item.county].raw_teachers.push(teacher);
      chartData[item.county].raw_expenditure.push(expenditure);
    } else {
      chartData[item.county] = {
        raw_student: [student],
        raw_teachers: [teacher],
        raw_expenditure: [expenditure],
      };
    }
  });

  const dataAverages = Object.keys(chartData).map((key) => {
    const newObject = {
      county: key,
      average_student: average(chartData[key].raw_student),
      average_teacher: average(chartData[key].raw_teachers),
      average_expenditure: average(chartData[key].raw_expenditure),
    };
    newObject.students_per_teacher =
      newObject.average_student / newObject.average_teacher;
    newObject.average_spent_per_student =
      newObject.average_expenditure / newObject.average_student;
    return newObject;
  });

  return dataAverages;
};
