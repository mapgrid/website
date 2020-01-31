/* global REFERRALS */
import createReferrals from '@mapgrid/elements/referrals/api'

createReferrals({
    store: REFERRALS,
    origin: process.env.REFERRALS_ORIGIN,
})
