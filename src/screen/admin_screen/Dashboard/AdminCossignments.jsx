import React, { useState } from 'react';
import styles from '../../Home.module.css';
import DashboardHeader from '../../../component/userscreencomp/dashboardNav';
import DashboardDrawer from '../../../component/userscreencomp/Drawer';

import Sidebar from '../../../component/adminscreencomp/sidebar';
import LoadingModal from "../../../component/Modal/LoadingModal";
import { AdminCossignmentsComponent } from '../../../component/adminscreencomp/Home/Cossignments';
import { Error } from '../../../component/common/Error';
import { useNavigate } from 'react-router-dom';


const AdminCossignmentScreen = ({status}) => {
    //tradeModal and transfer modal
    let [isLoading, setIsLoading] = useState(false)
    let [isError,setIsError] = useState(false)
    let navigate = useNavigate()
    
    let handleNavigation = ()=>{
        navigate('/admindashboard/cossignment')
    }

   

    let showmenuHandler = () => {
        let drawer = document.querySelector('.drawerCon')
        drawer.classList.toggle('showdrawer')
    }


    if(isError){
        return <Error/>
    }


    return (<>
        {isLoading && <LoadingModal />}
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <Sidebar status='Cossignments' />
            </div>

            <div className={styles.main}>
                {/*mobile and dashboard headers*/}
                <DashboardDrawer showmenuHandler={showmenuHandler} />
                <DashboardHeader showmenuHandler={showmenuHandler}  headerTitle='Cossignments' />
                <AdminCossignmentsComponent status={status}/>
            </div>
            <div className={styles.floating_button} onClick={handleNavigation}><span class='material-icons'>add</span></div>
        </div>
    </>
    )
}

export default AdminCossignmentScreen