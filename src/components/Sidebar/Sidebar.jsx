import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';

const Sidebar = () => {
  const menuItems = [
    {
      id: '1',
      name: 'University',
      icon: <HiAcademicCap />,
    },
    {
      id: '2',
      name: 'Faculties',
      icon: <HiBookOpen />,
    },
  ];

  return (
    <ul className="sidebar">
      {menuItems.map(item => (
        <li key={item.id}>
          {item.icon} {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
