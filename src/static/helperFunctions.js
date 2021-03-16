const average = (arr) =>
  Math.round(arr.reduce((sume, el) => sume + el, 0) / arr.length);

export const quartile = (arr, q, key) => {
  const newArr = arr.map((item) => item[key]);
  var pos = (newArr.length - 1) * q;
  var base = Math.floor(pos);
  var rest = pos - base;
  if (newArr[base + 1] !== undefined) {
    return newArr[base] + rest * (newArr[base + 1] - newArr[base]);
  } else {
    return newArr[base];
  }
};

export const mode = (array, key) => {
  const map = new Map();
  let maxFreq = 0;
  let mode;

  for (const item of array) {
    let freq = map.has(item[key]) ? map.get(item[key]) : 0;
    freq++;

    if (freq > maxFreq) {
      maxFreq = freq;
      mode = item[key];
    }

    map.set(item[key], freq);
  }
  console.log(mode);
  return mode;
};

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
    newObject.average_spent_per_student = Math.round(
      newObject.average_expenditure / newObject.average_student
    );

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
    newObject.students_per_teacher = Math.round(
      newObject.average_student / newObject.average_teacher
    );
    return newObject;
  });

  return dataAverages.sort((a, b) => {
    return a.students_per_teacher - b.students_per_teacher;
  });
};
