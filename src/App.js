import Sidebar from 'react-bootstrap-sidebar-menu';

import { MdOutlineGroups } from 'react-icons/md';
import { GrProductHunt } from 'react-icons/gr';
import { SlOrganization } from 'react-icons/sl';
import { FaSearch } from 'react-icons/fa';
import { AiFillFilePdf, AiFillSetting } from 'react-icons/ai';
import { IoNotifications } from 'react-icons/io5';

import { CgProfile } from 'react-icons/cg';
import { Form, Nav } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Nav
				className="justify-content-between bg-dark p-3 mt-2"
				activeKey="/home"
				onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
			>
        <div>
        <h2 className='text-success'>Akili</h2>
      </div>
				<div className='d-flex'>
        <Nav.Item>
					<Form inline>
						<Form.Control
							type="text"
							name="q"
							placeholder="Search ..."
							className="mr-sm-2 ml-sm-5"
						></Form.Control>
					</Form>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link href="/home">
						<FaSearch size={20} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">
						<IoNotifications size={40} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-3">
						<CgProfile size={40} />
					</Nav.Link>
				</Nav.Item>
        </div>
			</Nav>
			<Sidebar className='container'>
				<Sidebar.Collapse>
					<Sidebar.Body>
						<Sidebar.Nav className="d-flex flex-column">
							<Sidebar.Nav.Link className="mb-4">
								<Sidebar.Nav.Icon>
									<MdOutlineGroups size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Stake Holder Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className="mb-5">
								<Sidebar.Nav.Icon>
									<GrProductHunt size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Product Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className="mb-5">
								<Sidebar.Nav.Icon>
									<AiFillFilePdf size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Reporting Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className="mb-5">
								<Sidebar.Nav.Icon>
									<SlOrganization size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Logistics Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className="mb-5">
								<Sidebar.Nav.Icon>
									<AiFillSetting size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Administration</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>
						</Sidebar.Nav>
					</Sidebar.Body>
				</Sidebar.Collapse>
			</Sidebar>
		</div>
	);
}

export default App;
