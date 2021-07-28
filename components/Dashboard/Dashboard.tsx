import React, { ReactNode } from 'react';
import { BiDollar } from 'react-icons/bi';
import {
  MdLibraryBooks,
  MdPeople,
  MdRateReview,
  MdShoppingCart,
  MdShopTwo,
} from 'react-icons/md';
import { useDashboardStats } from '../../hooks/useDashboardStats';
import DashboardCard from '../DashboardCard/DashboardCard';
import * as Styled from './styles.Dashboard';

/**
 * Admin dashboard component with statistical information.
 *@function Dashboard
 *@returns {JSX.Element} - Rendered Dashboard component
 */

interface DashboardStat {
  header: string;
  stat: string;
  icon: ReactNode;
}

const Dashboard = (): JSX.Element => {
  // TODO: Connect Dashboard with backend and get dynamic data

  const {
    totalRevenue,
    newOrdersAmount,
    deliveredOrdersAmount,
    mostTrendingItem,
    maxPurchaseFrequency,
  } = useDashboardStats();

  const topRow: DashboardStat[] = [
    {
      header: 'Revenue',
      stat: `$${totalRevenue}`,
      icon: <BiDollar className="icon" />,
    },
    {
      header: 'New Orders',
      stat: `${newOrdersAmount}`,
      icon: <MdShoppingCart className="icon" />,
    },
    {
      header: 'Delivered Orders',
      stat: `${deliveredOrdersAmount}`,
      icon: <MdShopTwo className="icon" />,
    },
    {
      header: 'Active Users',
      stat: `${428}`,
      icon: <MdPeople className="icon" />,
    },
  ];

  const midRow = [
    {
      header: 'Newsletter SignUps',
      stat: '29',
      icon: <MdLibraryBooks className="icon" />,
    },
    {
      header: 'Customer Reviews',
      stat: '61',
      icon: <MdRateReview className="icon" />,
    },
  ];

  return (
    <Styled.Container>
      <Styled.TopRow>
        {topRow.map((stat) => (
          <DashboardCard
            key={stat.header}
            header={stat.header}
            icon={stat.icon}
            stat={stat.stat}
            variant="icon"
          />
        ))}
      </Styled.TopRow>
      <Styled.MidRow>
        {midRow.map((stat) => (
          <DashboardCard
            key={stat.header}
            header={stat.header}
            icon={stat.icon}
            stat={stat.stat}
            variant="icon"
          />
        ))}
        <DashboardCard
          variant="stats"
          stats={[
            ['Orders Today', '14'],
            ['Weekly Orders', '121'],
            ['Hot Section', 'Sneakers'],
          ]}
        />
      </Styled.MidRow>

      <Styled.BottomRow>
        <DashboardCard
          variant="figure"
          title="Trends"
          stats={[
            [
              `${mostTrendingItem?.brand} ${mostTrendingItem?.model}`,
              `Sold : ${maxPurchaseFrequency}`,
            ],
          ]}
          imgParams={{
            src: `${mostTrendingItem?.img || '/logo.png'}`,
            height: 200,
            width: 300,
          }}
        />
        <DashboardCard
          variant="figure"
          title="Earnings"
          stats={[
            ['Revenue', `$${totalRevenue}`],
            ['Profit', `$${Math.round(totalRevenue - totalRevenue * 0.93)}`],
            ['Orders', `${newOrdersAmount}`],
          ]}
          imgParams={{
            src: '/images/charts/digram.svg',
            height: 200,
            width: 500,
          }}
        />
        <DashboardCard
          variant="figure"
          title="Users"
          stats={[
            ['Total', '12134'],
            ['Active', '428'],
            ['New', '26'],
          ]}
          imgParams={{
            src: '/images/charts/stats.svg',
            height: 200,
            width: 300,
          }}
        />
      </Styled.BottomRow>
    </Styled.Container>
  );
};

export default Dashboard;