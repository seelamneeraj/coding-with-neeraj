import { Component, OnInit } from '@angular/core';
import { PythonTopicsService } from '../../services/python-topics.services';

@Component({
  selector: 'app-introduction-to-python',
  templateUrl: './introduction-to-python.component.html',
  styleUrls: ['./introduction-to-python.component.scss']
})
export class IntroductionToPythonComponent implements OnInit {
  topicData: any;

  constructor(private pythonTopicsService: PythonTopicsService) {}

  ngOnInit(): void {
    this.pythonTopicsService.getTopicData().subscribe(data => {
      this.topicData = data.introductionToPython;
    });
  }
}
