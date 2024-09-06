import React, { useState } from 'react';

import {
    CAvatar,
    CProgress,
    CToastHeader,
    CBadge,
    CCard,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CListGroup,
    CListGroupItem,
    CCardText,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CModalBody,
    CForm,
    CFormInput,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react';

import CIcon from '@coreui/icons-react'

import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'

// importing the avatar icons here
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

// function begins
const UserManagement = () => {

    // creates changes for modals for adding users and manually showing them in the table
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [selecteduser, setSelecteduser] = useState(null);
    const [users, setusers] = useState([
        { id: 1, name: 'Jacob', company: 'Thornton', place: 'Europe', contact: '8976563537', verified: false },
        { id: 2, name: 'Jack', company: 'Microsoft', place: 'United Kingdom', contact: '9976867384', verified: false },
        { id: 3, name: 'Maria', company: 'Apple', place: 'USA', contact: '9976867784', verified: false },
    ]);

    // display the data taken from the form in the table
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        place: '',
        contact: '',
        file: null
    });

    // verifies the user
    const handleVerify = (id) => {
        setusers(users.map(user =>
            user.id === id ? { ...user, verified: true } : user
        ));
        setVisible(false);
    };

    // manually shows how the data will be deleted
    const handleDelete = (id) => {
        setusers(users.filter(user => user.id !== id));
    };

    // manually adds the user in the static page
    const handleAdduser = (event) => {
        event.preventDefault();
        const newuser = {
            id: users.length + 1,
            ...formData,
            verified: false
        };
        setusers([...users, newuser]);
        setFormVisible(false);
        setFormData({
            name: '',
            company: '',
            place: '',
            contact: '',
            file: null
        });
    };

    // this fucntion checks the verification of the file and the change the symbol in the verification
    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [id]: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    // this avriable defines the values of the table
    const tableExample = [
        {
            avatar: { src: avatar1, status: 'success' },
            user: {
                name: 'Yiorgos Avraamu',
                new: true,
                registered: 'Jan 1, 2023',
            },
            country: { name: 'USA', flag: cifUs },
            usage: {
                value: 50,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'success',
            },
            payment: { name: 'Mastercard', icon: cibCcMastercard },
            activity: '10 sec ago',
        },
        {
            avatar: { src: avatar2, status: 'danger' },
            user: {
                name: 'Avram Tarasios',
                new: false,
                registered: 'Jan 1, 2023',
            },
            country: { name: 'Brazil', flag: cifBr },
            usage: {
                value: 22,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'info',
            },
            payment: { name: 'Visa', icon: cibCcVisa },
            activity: '5 minutes ago',
        },
        {
            avatar: { src: avatar3, status: 'warning' },
            user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
            country: { name: 'India', flag: cifIn },
            usage: {
                value: 74,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'warning',
            },
            payment: { name: 'Stripe', icon: cibCcStripe },
            activity: '1 hour ago',
        },
        {
            avatar: { src: avatar4, status: 'secondary' },
            user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
            country: { name: 'France', flag: cifFr },
            usage: {
                value: 98,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'danger',
            },
            payment: { name: 'PayPal', icon: cibCcPaypal },
            activity: 'Last month',
        },
        {
            avatar: { src: avatar5, status: 'success' },
            user: {
                name: 'Agapetus Tadeáš',
                new: true,
                registered: 'Jan 1, 2023',
            },
            country: { name: 'Spain', flag: cifEs },
            usage: {
                value: 22,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'primary',
            },
            payment: { name: 'Google Wallet', icon: cibCcApplePay },
            activity: 'Last week',
        },
        {
            avatar: { src: avatar6, status: 'danger' },
            user: {
                name: 'Friderik Dávid',
                new: true,
                registered: 'Jan 1, 2023',
            },
            country: { name: 'Poland', flag: cifPl },
            usage: {
                value: 43,
                period: 'Jun 11, 2023 - Jul 10, 2023',
                color: 'success',
            },
            payment: { name: 'Amex', icon: cibCcAmex },
            activity: 'Last week',
        },
    ]

    return (
        <>
            {/* This part shows the tabular display of the user information and provides feature of edit, view docs and delete and changes the verification icon */}
            <CCard>
                <CCardHeader>
                    <CRow>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <CCol>
                                    User Management
                                </CCol>
                            </div>
                            <div className='px-4'>
                                <CCol>
                                    <CButton color="primary" className='px-4' onClick={() => setFormVisible(true)}>Add users</CButton>
                                </CCol>
                            </div>
                        </div>
                    </CRow>
                </CCardHeader>
                <CListGroup flush>
                    <CListGroupItem>
                        <CCardText>
                            <CRow xs={{ gutterX: 2 }}>
                                <CCol><div className="p-3 fw-semibold">#</div></CCol>
                                <CCol><div className="p-3  px-1 fw-bolder">Name</div></CCol>
                                <CCol><div className="p-3 fw-bolder">Company/Guide Name</div></CCol>
                                <CCol><div className="p-3 fw-bolder">Place Name</div></CCol>
                                <CCol><div className="p-3 fw-bolder">Contact</div></CCol>
                                <CCol><div className="p-3 fw-bolder">Action</div></CCol>
                                <CCol><div className="p-3 fw-bolder">Verification</div></CCol>
                            </CRow>
                        </CCardText>
                    </CListGroupItem>
                    {users.map(user => (
                        <CListGroupItem key={user.id}>
                            <CCardText>
                                <CRow xs={{ gutterX: 2 }}>
                                    <CCol><div className="p-3">{user.id}</div></CCol>
                                    <CCol><div className="p-3 px-1">{user.name}</div></CCol>
                                    <CCol><div className="p-3">{user.company}</div></CCol>
                                    <CCol><div className="p-3">{user.place}</div></CCol>
                                    <CCol><div className="p-3">{user.contact}</div></CCol>
                                    <CCol>
                                        <div className="p-3">
                                            <CButton color="secondary" variant="outline" className='p-1'>✏</CButton>
                                            <CButton color="danger" variant="outline" className='p-1' onClick={() => handleDelete(user.id)}>🗑</CButton>
                                            <CButton
                                                color="info"
                                                onClick={() => { setSelecteduser(user); setVisible(true); }}
                                                variant="outline"
                                                className='p-1'
                                            >👁‍🗨</CButton>
                                        </div>
                                    </CCol>
                                    <CCol>
                                        <div className="p-3">
                                            {user.verified ? '✅' : '❌'}
                                        </div>
                                    </CCol>
                                </CRow>
                            </CCardText>
                        </CListGroupItem>
                    ))}
                </CListGroup>
            </CCard>


            {/* This part shows the log Activtiy display of the user, it is in the card format using the toaster(Notification) tags */}
            <CCard className='my-3'>
                <CCardHeader>
                    <CRow>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <CCol>
                                    <h5 className='px-2'>Log Activity</h5>
                                </CCol>
                            </div>
                            {/* Not Needed Button becoz there is no such function */}
                            {/* <div className='px-4'>
                                <CCol>
                                    <CButton color="primary" className='px-4' onClick={() => setFormVisible(true)}>Add Outfitters</CButton>
                                </CCol>
                            </div> */}
                        </div>
                    </CRow>
                </CCardHeader>

                <CCard className="p-3">
                    <CCard className='my-2'>
                        <CToastHeader>
                            <div className="fw-bold me-auto"> <h5 style={{ display: 'inline-block' }} className='px-4 py-2'><CBadge color="info">User</CBadge></h5>Hello, world! This is a toast message. </div>
                            <small className='px-3'>7 min ago</small>
                        </CToastHeader>
                    </CCard>
                    <CCard className='my-2'>
                        <CToastHeader>
                            <div className="fw-bold me-auto"> <h5 style={{ display: 'inline-block' }} className='px-4 py-2'><CBadge color="info">User</CBadge></h5>Hello, world! This is a toast message. </div>
                            <small className='px-3'>7 min ago</small>
                        </CToastHeader>
                    </CCard>

                    <CCard className='my-2'>
                        <CToastHeader>
                            <div className="fw-bold me-auto"> <h5 style={{ display: 'inline-block' }} className='px-4 py-2'><CBadge color="info">User</CBadge></h5>Hello, world! This is a toast message. </div>
                            <small className='px-3'>7 min ago</small>
                        </CToastHeader>
                    </CCard>
                    <CCard className='my-2'>
                        <CToastHeader>
                            <div className="fw-bold me-auto"> <h5 style={{ display: 'inline-block' }} className='px-4 py-2'><CBadge color="info">User</CBadge></h5>Hello, world! This is a toast message. </div>
                            <small className='px-3'>7 min ago</small>
                        </CToastHeader>
                    </CCard>
                    <CCard className='my-2'>
                        <CToastHeader>
                            <div className="fw-bold me-auto"> <h5 style={{ display: 'inline-block' }} className='px-4 py-2'><CBadge color="info">User</CBadge></h5>Hello, world! This is a toast message. </div>
                            <small className='px-3'>7 min ago</small>
                        </CToastHeader>
                    </CCard>
                </CCard>
            </CCard>


            {/* This part shows the table in which the user's usage is mentioned */}
            <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                    <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                            <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                            Country
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Usage</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                            Payment Method
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Activity</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                                <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.user.name}</div>
                                <div className="small text-body-secondary text-nowrap">
                                    <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                                    {item.user.registered}
                                </div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className="d-flex justify-content-between text-nowrap">
                                    <div className="fw-semibold">{item.usage.value}%</div>
                                    <div className="ms-3">
                                        <small className="text-body-secondary">{item.usage.period}</small>
                                    </div>
                                </div>
                                <CProgress thin color={item.usage.color} value={item.usage.value} />
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <CIcon size="xl" icon={item.payment.icon} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className="small text-body-secondary text-nowrap">Last login</div>
                                <div className="fw-semibold text-nowrap">{item.activity}</div>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>


            {/* This part dispalys the modal whenever the add user button is clicked to add user, it manually adds the user in the static page, not controlling the backend*/}
            <CModal visible={formVisible} onClose={() => setFormVisible(false)}>
                <CModalHeader onClose={() => setFormVisible(false)}>
                    <CModalTitle>Add user</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm className="row g-3" onSubmit={handleAdduser}>
                        <CCol md={6}>
                            <CFormInput type="text" id="name" label="Name" value={formData.name} onChange={handleChange} />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput type="text" id="company" label="Company/Guide Name" value={formData.company} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput id="place" label="Place Name" placeholder="1234 Main St" value={formData.place} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput id="contact" label="Contact Number" value={formData.contact} onChange={handleChange} />
                        </CCol>
                        <CCol md={6}>
                            <CFormInput id="file" type="file" onChange={handleChange} />
                        </CCol>
                        <CCol xs={12}>

                            <CButton color="primary" type="submit">Add</CButton>
                        </CCol>
                    </CForm>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setFormVisible(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>


            {/* This part shows the modal with the docs for the verification of the documents of the selected user */}
            {selecteduser && (
                <CModal visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader onClose={() => setVisible(false)}>
                        <CModalTitle>Verification</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <p>Verify {selecteduser.name}'s documents.</p>
                        <CForm className="row g-3">
                            <CCol xs={12}>
                                <CFormInput type="file" id="verificationFile" label="Upload Verification Document" />
                            </CCol>
                        </CForm>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                        <CButton color="info" onClick={() => handleVerify(selecteduser.id)}>
                            Verify
                        </CButton>
                    </CModalFooter>
                </CModal>
            )}
        </>
    );
}
export default UserManagement;