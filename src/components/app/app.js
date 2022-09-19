import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
    const data = [
        {
            name: "Sasha",
            salary: 100,
            increase: true,
            id:1
        },
        {
            name: "Misha",
            salary: 200,
            increase: false,
            id:2
        },
        {
            name: "Dima",
            salary: 300,
            increase: false,
            id:3
        },

    ]
    return (
        <div className="app">
            <AppInfo></AppInfo>
            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
            <EmployeesList data={data}></EmployeesList>
            <EmployeesAddForm></EmployeesAddForm>
        </div>
    )
}


export default App;