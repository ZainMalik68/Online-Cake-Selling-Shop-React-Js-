import Router from "./router/routes";

function App() {
  return (
    <>
      <Router />
    </>
  );
}
export default App;

// import "./styles.css";

// export default function App() {
//   function SortArray(arr) {
//     const array = [...arr].sort((a, b) => a - b);
//     return array;
//   }
//   function AddArray(arr) {
//     const reducer = (a, b) => a + b;
//     return arr.reduce(reducer);
//   }
//   function Mean_UnGroup(arr, n) {
//     var temp = null;
//     n ? (temp = n) : (temp = arr.length);
//     return AddArray(arr) / temp;
//   }

//   function submission_all_frequency(arr) {
//     const reducer = (a, b) => a + b;
//     return arr.reduce(reducer);
//   }

//   function create_class_boundaries(a, b, interval, frequency) {
//     //  a is lower boundry in all
//     // b is higher boundary in all
//     // interval is class interval
//     //frequency is array of all frequency
//     var Boundaries = [];
//     var X = [];
//     var FX = [];
//     for (var i = a; i <= b; i++) {
//       if (i % interval === 0) {
//         Boundaries.push(i);
//       }
//     }
//     for (var i = a; i < b; i++) {
//       if (i % interval === 0) {
//         X.push(MidPoint_X(i, i + interval));
//       }
//     }
//     for (var h = 0; h < frequency.length; h++) {
//       FX.push(frequency[h] * X[h]);
//     }

//     var ArithMatic_Mean = AddArray(FX) / AddArray(frequency);
//     return ArithMatic_Mean;
//   }

//   function MidPoint_X(a, b) {
//     return (a + b) / 2;
//   }

//   function Deviation(X, A) {
//     return X - A;
//   }
//   function ShortCutMethodMeanDeviationUngroupData(A, X, submission_D, n) {
//     var mean = A + submission_D / n;
//     return mean;
//   }

//   function ShortCutMethodMeanDeviation(A, X, submission_D, n) {
//     var mean = A + submission_D / n;
//     return mean;
//   }
//   return (
//     <div className="App">
//       {/* <h2> Q 1 (i) : Arithmetic mean for ungrouped data </h2>
//       {Mean_UnGroup([160], 10)} Ans
//       <h2> Q 1 (ii): Arithmetic mean for ungrouped data </h2>
//       {Mean_UnGroup([8, 3, 5, 12, 10])} Ans
//       <h2> Q 2 : Arithmetic mean for ungrouped data </h2>
//       {Mean_UnGroup([84, 91, 72, 68, 87, 78])} Ans
//       <h2> Q 3 : Arithmetic mean for ungrouped data </h2>
//       (I to C {Mean_UnGroup([41, 35, 38, 34, 30])}) (Opp{" "}
//       {Mean_UnGroup([46, 50, 39, 50, 38])} ) (Satics
//       {Mean_UnGroup([50, 52, 41, 46, 39])}) Ans
//       <h2> Q 4 : Arithmetic mean for Group data </h2>
//       {create_class_boundaries(5, 50, 5, [1, 3, 6, 10, 15, 12, 8, 4, 1])}
//       Ans */}

//       {/* <h2> Q 6 Arithmetic mean for ungrouped data </h2>
//       {Mean_UnGroup([
//         121,
//         115,
//         79,
//         52,
//         102,
//         126,
//         81,
//         65,
//         109,
//         119,
//         115,
//         121,
//         103,
//         75,
//         59,
//         110
//       ])} */}
//       <h2> Q 7 (i) Arithmetic mean by deviation for ungrouped data </h2>
//       {ShortCutMethodMeanDeviationUngroupData(10, 5, 50, 5)}

//       <h2> Q 7 (ii) Arithmetic mean by deviation for ungrouped data </h2>
//       {ShortCutMethodMeanDeviationUngroupData(39, 5, 240, 10)}

//       <h2> Q 7 (ii) Arithmetic mean by deviation for ungrouped data </h2>
//       {ShortCutMethodMeanDeviationUngroupData(125, 5, 124.45, 12)}

//       <h2> Q 7 (ii) Arithmetic mean by deviation for group data </h2>
//       {ShortCutMethodMeanDeviationUngroupData(125, 5, 124.45, 12)}
//     </div>
//   );
// }
