/* global REFERRALS */
import createReferrals from '@mapgrid/elements/referrals/worker'

createReferrals({
    store: REFERRALS,
    origin: process.env.REFERRALS_ORIGIN,
})
