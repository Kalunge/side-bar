import Sidebar from 'react-bootstrap-sidebar-menu';

import { MdOutlineGroups } from 'react-icons/md';
import { GrProductHunt } from 'react-icons/gr';
import { SlOrganization } from 'react-icons/sl';
import { CgShortcut } from 'react-icons/cg';

function App() {
	return (
		<div className="App">
			<Sidebar>
				<Sidebar.Collapse>
					<Sidebar.Header>
						<Sidebar.Brand>
							<CgShortcut size={70}/>
						</Sidebar.Brand>
						<Sidebar.Toggle />
					</Sidebar.Header>
					<Sidebar.Body>
						<Sidebar.Nav>
							<Sidebar.Nav.Link>
								<Sidebar.Nav.Icon>
									<MdOutlineGroups size={70} />
								</Sidebar.Nav.Icon>
								<Sidebar.Nav.Title>Stake Holder Management</Sidebar.Nav.Title>
							</Sidebar.Nav.Link>
							<Sidebar.Sub>
								<Sidebar.Sub.Toggle>
									<Sidebar.Nav.Icon />
									<Sidebar.Nav.Title>
										{/* sub menu item title */}
									</Sidebar.Nav.Title>
								</Sidebar.Sub.Toggle>
								<Sidebar.Sub.Collapse>
									<Sidebar.Nav>
										<Sidebar.Nav.Link>
											<Sidebar.Nav.Icon>
												{/* sum menu item icon */}
												<GrProductHunt size={70} />
											</Sidebar.Nav.Icon>
                      <Sidebar.Nav.Title>productManagement</Sidebar.Nav.Title>
										</Sidebar.Nav.Link>

										<Sidebar.Nav.Link> <br />
											<Sidebar.Nav.Icon>
												{/* sum menu item icon */}
												<SlOrganization size={70} />
											</Sidebar.Nav.Icon>
                      <Sidebar.Nav.Title>Logistics Management</Sidebar.Nav.Title>
										</Sidebar.Nav.Link>
									</Sidebar.Nav>
								</Sidebar.Sub.Collapse>
							</Sidebar.Sub>
						</Sidebar.Nav>
					</Sidebar.Body>
				</Sidebar.Collapse>
			</Sidebar>
		</div>
	);
}

export default App;
