import { Tensor, Tensor2D } from '@tensorflow/tfjs-core';
export declare class KNNClassifier {
    private trainDatasetMatrix;
    private classDatasetMatrices;
    private classExampleCount;
    private exampleShape;
    private labelToClassId;
    private nextClassId;
    addExample(example: Tensor, label: number | string): void;
    private similarities;
    predictClass(input: Tensor, k?: number): Promise<{
        label: string;
        classIndex: number;
        confidences: {
            [label: string]: number;
        };
    }>;
    clearClass(label: number | string): void;
    clearAllClasses(): void;
    getClassExampleCount(): {
        [label: string]: number;
    };
    getClassifierDataset(): {
        [label: string]: Tensor2D;
    };
    getNumClasses(): number;
    setClassifierDataset(classDatasetMatrices: {
        [label: string]: Tensor2D;
    }): void;
    private calculateTopClass;
    private clearTrainDatasetMatrix;
    private normalizeVectorToUnitLength;
    private getNumExamples;
    dispose(): void;
}
export declare function create(): KNNClassifier;
