import './app-filter.css'

const AppFilter = () =>{
    return(
        <div className="btn-group">
            <button className=' btn btn-light'
                    type='button'>
                все сотрудники
            </button>
            <button className=' btn btn-light'
                              type='button'>
                сотрудники на повышение
        </button>
            <button className=' btn btn-light'
                          type='button'>
                зп больше 1000$
        </button>
        </div>
    )
}

export default AppFilter;