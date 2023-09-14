import EC2 from '../../../assets/icons/cloudTools/EC2.svg';
import EBS from '../../../assets/icons/cloudTools/Elastic Block Store.svg';
import LAMBDA from '../../../assets/icons/cloudTools/Lambda.svg';
import S3 from '../../../assets/icons/cloudTools/Simple Storage Service.svg';
import VPC from '../../../assets/icons/cloudTools/Virtual Private Cloud.svg';
import ECR from '../../../assets/icons/cloudTools/Elastic Container Registry.svg';

export const CloudToolsIconData = [
  { id: 1, name: 'S3', alt: 's3', imgPath: S3, path: '/s3' },
  { id: 2, name: 'EC2', alt: 'EC2', imgPath: EC2, path: '/ec2' },
  { id: 3, name: 'EBS', alt: 'EBS', imgPath: EBS, path: '/ebs' },
  { id: 4, name: 'LAMBDA', alt: 'lambda', imgPath: LAMBDA, path: '/lambda' },
  { id: 5, name: 'VPC', alt: 'vpc', imgPath: VPC, path: '/vpc' },
  { id: 5, name: 'ECR', alt: 'ecr', imgPath: ECR, path: '/ecr' }


];
