import { BaseItemParams, BaseRequestItem, InstrumentParams } from '../surfaces.interface';
import { AxisUnit, DiscountingType, InputVolatilityType, VolatilityAdjustmentType } from '../surfaces.models';
export * from '../surfaces.models';
export * from '../surfaces.interface';
export interface Params extends BaseItemParams<CalculationParams>, SurfaceDefinition, InstrumentParams {
}
export interface SurfaceDefinition {
    instrumentCode?: string;
    discountingType?: DiscountingType;
}
export interface RequestItem extends BaseRequestItem {
    underlyingDefinition: SurfaceDefinition;
    surfaceParameters?: CalculationParams;
}
export interface CalculationParams {
    xAxis: AxisUnit;
    yAxis: AxisUnit;
    zAxis?: AxisUnit;
    calculationDate?: string;
    inputVolatilityType?: InputVolatilityType;
    marketDataDate?: string;
    shiftPercent?: number;
    source?: string;
    valuationDate?: string;
    volatilityAdjustmentType?: VolatilityAdjustmentType;
    includeCapletsVolatility?: boolean;
}
