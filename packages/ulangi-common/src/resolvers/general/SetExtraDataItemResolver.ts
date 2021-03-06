/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { AbstractAlternativeResolver } from '@ulangi/resolver';
import * as Joi from 'joi';

import { SetExtraDataItem } from '../../types/SetExtraDataItem';
import { QuizMultipleChoiceMaxLimitResolver } from './QuizMultipleChoiceMaxLimitResolver';
import { QuizVocabularyPoolResolver } from './QuizVocabularyPoolResolver';
import { QuizWritingAutoShowKeyboardResolver } from './QuizWritingAutoShowKeyboardResolver';
import { QuizWritingMaxLimitResolver } from './QuizWritingMaxLimitResolver';
import { SetFeatureSettingsResolver } from './SetFeatureSettingsResolver';
import { SpacedRepetitionAutoplayAudioResolver } from './SpacedRepetitionAutoplayAudioResolver';
import { SpacedRepetitionFeedbackButtonsResolver } from './SpacedRepetitionFeedbackButtonsResolver';
import { SpacedRepetitionInitialIntervalResolver } from './SpacedRepetitionInitialIntervalResolver';
import { SpacedRepetitionMaxLimitResolver } from './SpacedRepetitionMaxLimitResolver';
import { SpacedRepetitionReviewStrategyResolver } from './SpacedRepetitionReviewStrategyResolver';
import { WritingAutoShowKeyboardResolver } from './WritingAutoShowKeyboardResolver';
import { WritingAutoplayAudioResolver } from './WritingAutoplayAudioResolver';
import { WritingFeedbackButtonsResolver } from './WritingFeedbackButtonsResolver';
import { WritingInitialIntervalResolver } from './WritingInitialIntervalResolver';
import { WritingMaxLimitResolver } from './WritingMaxLimitResolver';

export class SetExtraDataItemResolver extends AbstractAlternativeResolver<
  SetExtraDataItem
> {
  private setFeatureSettingsResolver = new SetFeatureSettingsResolver();
  private spacedRepetitionAutoplayAudioResolver = new SpacedRepetitionAutoplayAudioResolver();
  private spacedRepetitionInitialIntervalResolver = new SpacedRepetitionInitialIntervalResolver();
  private spacedRepetitionMaxLimitResolver = new SpacedRepetitionMaxLimitResolver();
  private spacedRepetitionReviewStrategyResolver = new SpacedRepetitionReviewStrategyResolver();
  private spacedRepetitionFeedbackButtonsResolver = new SpacedRepetitionFeedbackButtonsResolver();
  private writingAutoplayAudioResolver = new WritingAutoplayAudioResolver();
  private writingInitialIntervalResolver = new WritingInitialIntervalResolver();
  private writingMaxLimitResolver = new WritingMaxLimitResolver();
  private writingFeedbackButtonsResolver = new WritingFeedbackButtonsResolver();
  private writingAutoShowKeyboardResolver = new WritingAutoShowKeyboardResolver();
  private quizVocabularyPoolResolver = new QuizVocabularyPoolResolver();
  private quizWritingMaxLimitResolver = new QuizWritingMaxLimitResolver();
  private quizMultipleChoiceMaxLimitResolver = new QuizMultipleChoiceMaxLimitResolver();
  private quizWritingAutoShowKeyboardResolver = new QuizWritingAutoShowKeyboardResolver();

  protected rules: Joi.AlternativesSchema;

  public constructor() {
    super();
    this.rules = Joi.alternatives().try(
      this.setFeatureSettingsResolver.getRules(),
      this.spacedRepetitionAutoplayAudioResolver.getRules(),
      this.spacedRepetitionInitialIntervalResolver.getRules(),
      this.spacedRepetitionMaxLimitResolver.getRules(),
      this.spacedRepetitionReviewStrategyResolver.getRules(),
      this.spacedRepetitionFeedbackButtonsResolver.getRules(),
      this.writingAutoplayAudioResolver.getRules(),
      this.writingInitialIntervalResolver.getRules(),
      this.writingMaxLimitResolver.getRules(),
      this.writingFeedbackButtonsResolver.getRules(),
      this.writingAutoShowKeyboardResolver.getRules(),
      this.quizVocabularyPoolResolver.getRules(),
      this.quizWritingMaxLimitResolver.getRules(),
      this.quizMultipleChoiceMaxLimitResolver.getRules(),
      this.quizWritingAutoShowKeyboardResolver.getRules()
    );
  }
}
