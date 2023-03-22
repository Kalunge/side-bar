import Sidebar from 'react-bootstrap-sidebar-menu';

import { MdOutlineGroups } from 'react-icons/md';
import { GrProductHunt } from 'react-icons/gr';
import { SlOrganization } from 'react-icons/sl';
import { CgShortcut } from 'react-icons/cg';
import { AiFillFilePdf, AiFillSetting } from 'react-icons/ai';

function App() {
	return (
		<div className="App">
			<Sidebar>
				<Sidebar.Collapse>
					<Sidebar.Header>
						<Sidebar.Brand>
							<CgShortcut size={70} />
						</Sidebar.Brand>
						<Sidebar.Toggle />
					</Sidebar.Header>
					<Sidebar.Body>
						<Sidebar.Nav className='d-flex flex-column'>
							<Sidebar.Nav.Link className='mb-4'>
								<Sidebar.Nav.Icon>
									<MdOutlineGroups size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Stake Holder Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className='mb-5'>
								<Sidebar.Nav.Icon>
									<GrProductHunt size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Product Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className='mb-5'>
								<Sidebar.Nav.Icon>
									<AiFillFilePdf size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Reporting Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className='mb-5'>
								<Sidebar.Nav.Icon>
									<SlOrganization size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Logistics Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>

							<Sidebar.Nav.Link className='mb-5'>
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
