import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Flex, LayoutCurrencyIcon, Text } from '../../../../../common';
import { useCatalogContext } from '../../../CatalogContext';
import { IPurchasableOffer } from '../../../common/IPurchasableOffer';

interface CatalogPriceDisplayWidgetViewProps
{
    offer: IPurchasableOffer;
    separator?: boolean;
}

export const CatalogPriceDisplayWidgetView: FC<CatalogPriceDisplayWidgetViewProps> = props =>
{
    const { offer = null, separator = false } = props;
    const { purchaseOptions = null } = useCatalogContext();
    const { quantity = 1 } = purchaseOptions;

    if(!offer) return null;

    return (
        <>
            { (offer.priceInCredits > 0) &&
                <Flex alignItems="center" gap={ 1 }>
                    <Text bold>{ (offer.priceInCredits * quantity) }</Text>
                    <LayoutCurrencyIcon type={ -1 } />
                </Flex> }
            { separator && (offer.priceInCredits > 0) && (offer.priceInActivityPoints > 0) &&
                <FontAwesomeIcon size="xs" color="black" icon="plus" /> }
            { (offer.priceInActivityPoints > 0) &&
                <Flex alignItems="center" gap={ 1 }>
                    <Text bold>{ (offer.priceInActivityPoints * quantity) }</Text>
                    <LayoutCurrencyIcon type={ offer.activityPointType } />
                </Flex> }
        </>
    );
}
