import type { NextApiRequest, NextApiResponse } from 'next';
import { cardService } from '../../../backend/services/cardServiceCycleTime';
import cycleTimeResult from "../data/user-completed-cycle-time.json";

/**
 * Cycle Time For Cards Completed This Month
 *
 * @description To return cycle time of completed card by each user (in this month)
 */

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const generateReport = async () => {
    //const {from, to} = req.query;

    let processedCards = cardService.getAverageTime(cycleTimeResult)
    
    return res.status(200).json(
      processedCards
    );
  };

  await generateReport();
}
