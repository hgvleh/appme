import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { useEffect } from 'react';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestOrders = (props) => {
  const { orders, sx } = props;
  useEffect(()=>{
    orders.map((t)=>{
      console.log(      t.code)

    })

  })

  return (
    <Card sx={sx}>
      <CardHeader title="المعلومات" dir='rtl'/>
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 350 }}>
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell>
                  رقم الهاتف
                </TableCell>
                <TableCell sortDirection="desc">
                  الرمز السري
                </TableCell>
                <TableCell>
                  كود التفعيل
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders!==undefined?orders.map((order,key) => {

                return (
                  <TableRow
                    hover
                    key={key}
                  >
                    <TableCell>
                      {order.phone}
                    </TableCell>
                    <TableCell>
                      {order.pass}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color='success'>
                        {order.code}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              }):null}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
