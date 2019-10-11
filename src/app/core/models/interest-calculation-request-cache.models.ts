import { InterestCalculationRequest } from './../dtos/interest-calculation-request.dto';

export interface InterestCalculationRequestCacheModel {
    interestCalculationRequest: InterestCalculationRequest;
    cacheDateTime: Date;
}
